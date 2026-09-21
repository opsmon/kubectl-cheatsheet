#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"

CATEGORY_BY_FILE = {
  "viewing.md" => "viewing",
  "management.md" => "management",
  "workloads.md" => "workloads",
  "network.md" => "network",
  "storage.md" => "storage",
  "security.md" => "security",
  "cluster.md" => "cluster",
  "utilities.md" => "utilities"
}.freeze

def slug(text)
  text
    .downcase
    .strip
    .gsub(/\s+/, "-")
    .gsub(/[`~!@#$%^&*()+=\[\]{}\\|;:"',.<>\/?]/, "")
end

items = []

Dir["{ru,eng}/*.md"].sort.each do |file|
  lang = file.start_with?("ru/") ? "ru" : "eng"
  category = CATEGORY_BY_FILE[File.basename(file)]
  next unless category

  section = File.basename(file, ".md")
  section_hash = ""
  in_code = false
  code = []

  add_block = lambda do
    unless code.empty?
      body = code.join("\n")
      if body.match?(/\b(?:kubectl|helm|krew|stern|kubectx|kubens|openssl)\b/)
        items << {
          lang: lang, category: category, file: file, hash: section_hash,
          section: section, comment: nil, command: body
        }
      end
    end
    code = []
  end

  File.readlines(file, chomp: true).each do |line|
    if (match = line.match(/^##+\s+(.+)$/))
      section = match[1]
      section_hash = slug(section)
      next
    end

    if line.start_with?("```")
      if in_code
        add_block.call
        in_code = false
      else
        in_code = true
      end
      next
    end

    next unless in_code

    code << line
  end
end

File.write(
  "assets/search-index.js",
  "window.commandIndex = #{JSON.pretty_generate(items)};\n"
)
