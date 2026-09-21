#!/usr/bin/env ruby
# frozen_string_literal: true

require "open3"

filters = %w[ru eng].map do |lang|
  line = File.readlines("#{lang}/utilities.md").find { |item| item.include?(".status.conditions[]?") }
  line&.match(/\| jq -r '(.+)'/)&.captures&.first or abort "Missing #{lang} readiness filter"
end
abort "RU/EN readiness filters differ" unless filters.uniq.size == 1

output, error, status = Open3.capture3("jq", "-r", filters.first, stdin_data: File.read("tests/fixtures/pods.json"))
abort error unless status.success?
expected = ["team\tsidecar-not-ready", "ops\twaiting"]
abort "Wrong NOT ready result: #{output}" unless output.lines.map(&:chomp) == expected
puts "OK: NOT ready includes unready sidecar and missing condition, excludes ready multi-container Pod."
