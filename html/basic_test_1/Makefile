NAME	:= index.html

FILES	:= $(shell ls *.html | sed 's/$(NAME)//')
FILES	:= $(FILES:%.html=%.txt)

LISTEN	:= localhost:8000
ROOT	:= html_intro
DIR		:= basic_test_1

all: clean $(NAME)

$(NAME): $(FILES)

$(FILES): %.txt: %.html
	cp $< $@
	echo "<a href=\"http://$(LISTEN)/$(ROOT)/$(DIR)/$<\" title=\"$<\">$<</a>" >> $(NAME)
	echo "<a href=\"http://$(LISTEN)/$(ROOT)/$(DIR)/$@\" title=\"$@\">$@</a>" >> $(NAME)
	echo "<p></p>" >> $(NAME)

clean:
	$(RM) $(NAME)
	$(RM) $(FILES)

re: clean all

.PHONY: all clean re
