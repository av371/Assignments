class CreateEmployeeSkillLists < ActiveRecord::Migration[5.1]
  def change
    create_table :employee_skill_lists do |t|
    	t.belongs_to :employees, index: true
    	t.belongs_to :skills, index: true
     	t.timestamps
    end
  end
end
