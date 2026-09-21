#!/usr/bin/env ruby
# frozen_string_literal: true

require "open3"
require "tmpdir"

examples = %w[ru eng].map do |lang|
  section = File.read("#{lang}/management.md").split(/^## .*\(diff\)\s*$/, 2).last.split(/^## /, 2).first
  section[/```sh\n(.*?)```/m, 1] or abort "Missing #{lang} diff automation example"
end
abort "RU/EN diff automation differs" unless examples.uniq.size == 1

Dir.mktmpdir("kubectl-diff-check") do |dir|
  stub = File.join(dir, "kubectl")
  File.write(stub, <<~SH)
    #!/bin/sh
    printf '%s\n' "$1" >> "$CALL_LOG"
    if [ "$1" = diff ]; then exit "$DIFF_STATUS"; fi
    exit 0
  SH
  File.chmod(0o755, stub)

  { "0" => %w[diff apply], "1" => %w[diff apply], "2" => %w[diff] }.each do |code, expected|
    log = File.join(dir, "calls-#{code}")
    _out, _err, status = Open3.capture3({ "PATH" => "#{dir}:#{ENV.fetch('PATH')}", "CALL_LOG" => log, "DIFF_STATUS" => code }, "sh", "-c", examples.first)
    abort "Wrong exit for #{code}" unless status.exitstatus == (code == "2" ? 2 : 0)
    abort "Wrong calls for #{code}" unless File.readlines(log, chomp: true) == expected
  end
end

puts "OK: diff exit 0/1 applies; error exit 2 stops, with fake kubectl only."
