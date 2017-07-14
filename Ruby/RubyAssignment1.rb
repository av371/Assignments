puts "Enter order of the matrix"
order = gets.chomp.to_i
$array = Array.new(order){Array.new(order)}
for i in 0..order-1
  for j in 0..order-1
    $array[i][j] = 00
  end
end



def array_print(array)
    array.each do |arr|
        arr.each do |item|
            print "|"+"#{item} "+"|"
        end
        print "\n"
    end
end

$expression = Hash.new('Null')

def find_row_column(cell)
  columns= ['A','B','C','D','E','F','G','I','J']
  value = cell.split("")
  col = columns.index(cell[0])
  row = cell[1].to_i
  return row-1,col
end

def update_check(cell)
  $expression.each do |key,value|
    check = value.split(" ")
    if check[0] == cell || check[2] == cell
      des = find_row_column(key)
      c1 = find_row_column(check[0])
      c2 = find_row_column(check[2])
      operation = check[1]
      cell1_value = $array[c1[0]][c1[1]]
      cell2_value = $array[c2[0]][c2[1]]
      case operation
        when '+'
          $array[des[0]][des[1]] = cell1_value + cell2_value
            
        when '-'
          $array[des[0]][des[1]] = cell1_value - cell2_value
            
        when '*'
          $array[des[0]][des[1]] = cell1_value * cell2_value
            
        else
          puts "Give Proper Operand"
        end
    else
      break
    end
  end
end
        
array_print($array)

loop do

  puts "Select any option from given below"+"\n"+"1.Set Value"+"\n"+"2.Set Expression"+"\n"+"3.Exit"
  
  option = gets.chomp.to_i

  case option
    when 1
      puts "Assign Value in A0 = 5 format"
      assign = gets.chomp.split(" ")
      value = assign.last.to_i
      values = find_row_column(assign[0])
      $array[values[0]][values[1]] = value
      update_check(assign[0])
      array_print($array)
    when 2
      puts "Format C0 = A0 + B0"
      expres = gets.chomp
      expre = expres.split(" ")
      express = expres.split(" ",3)
      $expression[express[0]] = express[2]
      
      des = find_row_column(expre[0])
      operation = expre[3]
      c1 = find_row_column(expre[2])
      c2 = find_row_column(expre[4])
      cell1_value = $array[c1[0]][c1[1]]
      cell2_value = $array[c2[0]][c2[1]]
      case operation
        when '+'
          $array[des[0]][des[1]] = cell1_value + cell2_value
          array_print($array)
        when '-'
          $array[des[0]][des[1]] = cell1_value - cell2_value
          array_print($array)
        when '*'
          $array[des[0]][des[1]] = cell1_value * cell2_value
          array_print($array)
        else
          puts "Give Proper Operand"
        end
    when 3
      break
    else
      puts "Select from given options only"
    end
end