JSLINT = ./node_modules/.bin/jslint
CASPERJS = ./node_modules/.bin/casperjs

all : $(JSLINT) $(CASPERJS) 

clean :
	-rm -f npm-debug.log

clobber : clean
	-rm -rf node_modules

$(JSLINT) :
$(CASPERJS) :
	npm -silent install
