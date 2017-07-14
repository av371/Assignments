class Employee < ApplicationRecord
	belongs_to :team_lead
	belongs_to :project
	has_many :employee_skill_lists
	has_many :skills, :through => :employee_skill_lists

end
