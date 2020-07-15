require 'rubygems'
require 'rake'
require 'rdoc'
require 'date'
require 'yaml'
require 'rake/testtask'

$LOAD_PATH.unshift(File.join(File.dirname(__FILE__), *%w[lib]))
require 'jekyll/version'

#############################################################################
#
# Standard tasks
#
#############################################################################

Rake::TestTask.new(:test) do |test|
  test.libs << 'lib' << 'test'
  test.pattern = 'test/**/test_*.rb'
  test.verbose = true
end

task :serve do
  sh "bundle exec jekyll serve --watch -H0.0.0.0 -P5000 --future --unpublished"
end
