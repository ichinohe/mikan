namespace :ping do
	desc "check the heroku page"
	task :execute => :environment do
		require 'net/http'
		uri = URI.parse('http://mikan-bubble.herokuapp.com/')
		Net::HTTP.get(uri)
	end

end
