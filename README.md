FSMify
======

Currently running at http://fsmify.herokuapp.com/ and
http://journal.jabagawee.com/fsmify

FSMify is a quick and dirty program that originally was going to be a
RESTful [Flask](http://flask.pocoo.org/) site used to generate graphs
until I realized that [Graphviz](http://www.graphviz.org/) does not run
on [Heroku](http://www.heroku.com/). Then I realized that Google provides
this [pretty
interface](https://developers.google.com/chart/image/docs/gallery/graphviz)
to generate Graphviz graphs from DOT syntax, so I decided to put my
Javascript to the test.

It's a VERY disgusting codebase that I honestly plan on cleaning up
sooner or later (hahhhh, famous last words of most throwaway projects).
This was also one of my first attempts at Javascript, so that should
explain most of the nastiness. The random inefficiency of the Flask
framework surrounding everything is a direct side effect of its
development, all of which took about an afternoon.

File format input is specified in [Section
2](http://philsci-archive.pitt.edu/9525/1/OyunPreprint.pdf) of
the original paper on [Oyun](http://charlespence.net/oyun/).

Feel free to fork the code and help me clean it up / organize it better.
