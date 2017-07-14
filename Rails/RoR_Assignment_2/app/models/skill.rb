class Skill < ApplicationRecord
	has_many :employee_skill_lists
	has_many :employees, :through => :employee_skill_lists
end
