JSLINT=node_modules/.bin/jslint

JS_SRC = x.js
JS_OBJ = $(addprefix .linted., $(JS_SRC))

.linted.%.js : %.js $(JSLINT)
	$(JSLINT) $<
	touch $@

all : $(JS_OBJ)


run : all
	casperjs x.js	

clean:
	-rm -f .linted.*.js
	-rm -f shot*.png

clobber : clean
	-rm -rf node_modules

$(JSLINT):
	npm install jslint
