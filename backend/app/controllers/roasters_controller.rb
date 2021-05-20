class RoastersController < ApplicationController
	def index
		roasters = Roaster.all
		# binding.pry
		render json: RoasterSerializer.new(roasters).serializable_hash
	end

	def show
	end
end
