#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"

index = JSON.parse(File.read("assets/search-index.js").sub(/\Awindow.commandIndex = /, "").sub(/;\s*\z/, ""))

def require_example(index, file, *parts)
  return if index.any? { |item| item["file"] == file && parts.all? { |part| item["command"].include?(part) } }

  abort "Missing complete example in #{file}: #{parts.first}"
end

%w[ru eng].each do |lang|
  require_example(index, "#{lang}/security.md", "cat <<EOF | kubectl apply -f -\napiVersion:", "\nEOF")
  require_example(index, "#{lang}/viewing.md", "kubectl events -A -o json | \\\n  jq")
  require_example(index, "#{lang}/utilities.md", '.status.conditions[]?', '.type == "Ready"')
  management = File.read("#{lang}/management.md")
  abort "Unsafe diff/apply chain in #{lang}" if management.include?("kubectl diff -f deployment.yaml && kubectl apply")
end

puts "OK: multiline examples and corrected commands are present."
