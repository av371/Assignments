class TeamLeadsController < ApplicationController

	def index
		@team_lead = TeamLead.all
	end

	def show
	
		@team_lead = TeamLead.find(params[:id])
	end

	def new 
		@team_lead = TeamLead.all
	end

end
