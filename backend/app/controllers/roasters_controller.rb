class RoastersController < ApplicationController
	def index
		json: Roaster.all.to_json
	end

	def show
	end
end
