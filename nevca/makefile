JSLINT = ./node_modules/.bin/jslint
CASPERJS = ./node_modules/.bin/casperjs

JS_SRC = x.js
JS_OBJ = $(addprefix .linted., $(JS_SRC))

.linted.%.js : %.js $(JSLINT)
	$(JSLINT) $<
	touch $@

all : $(JSLINT) $(CASPERJS) $(JS_OBJ)

clean :
	-rm -f npm-debug.log

clobber : clean
	-rm -rf node_modules

$(JSLINT) :
$(CASPERJS) :
	npm -silent install

run : all
	casperjs x.js	
