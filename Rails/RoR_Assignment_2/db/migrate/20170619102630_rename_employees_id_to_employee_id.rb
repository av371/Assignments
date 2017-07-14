class RenameEmployeesIdToEmployeeId < ActiveRecord::Migration[5.1]
  def change
  	rename_column :employee_skill_lists, :employees_id, :employee_id
  end
end
