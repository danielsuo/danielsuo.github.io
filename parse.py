import re

f = open('reading.html', 'r')

for line in f:
	r = re.compile('<p>(.*)</p>')
	m = r.findall(line)
	if len(m) > 0:
		print m[0]

