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

def command_line?(line)
  stripped = line.strip
  return false if stripped.empty?
  return false if stripped.start_with?("#")
  return false if stripped.start_with?("apiVersion:", "kind:", "metadata:", "spec:", "status:")
  return false if stripped == "EOF"

  stripped.include?("kubectl") ||
    stripped.start_with?("helm ", "krew ", "stern ", "kubectx", "kubens", "openssl ")
end

items = []

Dir["{ru,eng}/*.md"].sort.each do |file|
  lang = file.start_with?("ru/") ? "ru" : "eng"
  category = CATEGORY_BY_FILE[File.basename(file)]
  next unless category

  section = File.basename(file, ".md")
  section_hash = ""
  in_code = false
  last_comment = nil

  File.readlines(file, chomp: true).each do |line|
    if (match = line.match(/^##+\s+(.+)$/))
      section = match[1]
      section_hash = slug(section)
      last_comment = nil
      next
    end

    if line.start_with?("```")
      in_code = !in_code
      last_comment = nil unless in_code
      next
    end

    next unless in_code

    stripped = line.strip
    if stripped.start_with?("#")
      last_comment = stripped.sub(/^#\s?/, "")
      next
    end

    next unless command_line?(stripped)

    items << {
      lang: lang,
      category: category,
      file: file,
      hash: section_hash,
      section: section,
      comment: last_comment,
      command: stripped
    }
  end
end

File.write(
  "assets/search-index.js",
  "window.commandIndex = #{JSON.pretty_generate(items)};\n"
)
