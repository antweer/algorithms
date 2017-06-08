lfp = int(round(((balance + balance*annualInterestRate)/12), -1))
test = balance

while True:
  for i in range(12):
    test -= lfp
    test += (annualInterestRate/12)*(test)
  if test<=0 and test>=-140:
    break
  elif test > lfp:
    lfp += 10
  elif test < balance:
    test = balance
    lfp -= 10
  else:
    break
  
print("Lowest Payment: " + str(lfp))