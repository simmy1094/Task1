# Task1
#This is a webdriverio framework with cucumber
Run 'npm install' to get all the dependencies

Command to run the framework:
'npm run test'


This framework is design to run automation test case for the below scenario:
Filtering UI and extracting data for comparison

1.go to https://coinmarketcap.com
2.capture all page contents - we will let you decide what is the correct information to capture, suggestions e.g. price, name, position
3.followed by "+ Add Filter"
4.toggle "Mineable"
5.then select "All Cryptocurrencies"
6.select "Coins"
7.then select price and set minimum value to 100 and maximum to 10,000
8.compare page content to the content in step 3
