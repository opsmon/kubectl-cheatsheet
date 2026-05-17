#!/usr/bin/env ruby
# frozen_string_literal: true

require "set"

def slug(text)
  text
    .downcase
    .strip
    .gsub(/\s+/, "-")
    .gsub(/[`~!@#$%^&*()+=\[\]{}\\|;:"',.<>\/?]/, "")
end

errors = []

%w[
  viewing.md
  management.md
  workloads.md
  network.md
  storage.md
  security.md
  cluster.md
  utilities.md
].each do |file|
  ru = File.readlines("ru/#{file}", chomp: true).grep(/^##+\s+/).map { |line| slug(line.sub(/^##+\s+/, "")) }
  en = File.readlines("eng/#{file}", chomp: true).grep(/^##+\s+/).map { |line| slug(line.sub(/^##+\s+/, "")) }

  errors << "#{file}: RU has #{ru.size} headings, EN has #{en.size}" unless ru.size == en.size
end

anchors = {}
Dir["{ru,eng}/*.md"].each do |file|
  anchors[file] = File.readlines(file, chomp: true)
    .grep(/^##+\s+/)
    .map { |line| slug(line.sub(/^##+\s+/, "")) }
    .to_set
end

text = File.read("index.html") + File.read("assets/app.js")
text.scan(/((?:ru|eng)\/[^"#]+\.md)#([^"\n]+)/).each do |file, hash|
  errors << "Broken anchor: #{file}##{hash}" unless anchors[file]&.include?(hash)
end

File.read("assets/app.js").scan(/\{\s*id: "[^"]+".*?ruFile: "([^"]+)".*?enFile: "([^"]+)".*?topics: \[(.*?)\]\s*\}/m).each do |ru_file, en_file, topics|
  topics.scan(/\["[^"]+", "([^"]+)", "([^"]+)"\]/).each do |ru_hash, en_hash|
    errors << "Broken topic anchor: #{ru_file}##{ru_hash}" unless anchors[ru_file]&.include?(ru_hash)
    errors << "Broken topic anchor: #{en_file}##{en_hash}" unless anchors[en_file]&.include?(en_hash)
  end
end

if File.exist?("assets/search-index.js")
  text.scan(/"file": "((?:ru|eng)\/[^"]+\.md)",\n\s+"hash": "([^"]+)"/).each do |file, hash|
    errors << "Broken search index anchor: #{file}##{hash}" unless anchors[file]&.include?(hash)
  end
else
  errors << "Missing assets/search-index.js; run ruby scripts/build_search_index.rb"
end

if errors.empty?
  puts "OK: headings, anchors, and search index look consistent."
else
  warn errors.join("\n")
  exit 1
end
