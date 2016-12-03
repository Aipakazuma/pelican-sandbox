# installed plugins.

```sh
$ pip install Pelican Markdown
$ pip install webassets cssmin
$ git clone https://github.com/getpelican/pelican-plugins.git
```

# build command

## template

static template.

```sh
$ gulp
```

pelican template.

```sh
$ ~/.pyenv/versions/anaconda3-2.3.0/bin/pelican content -s pelicanconf.py -t themes/commander-aipa
```

## blog view test

```sh
$ cd ~/output/
$ python -m pelican.server
```
