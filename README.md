# Lambda Lounge Website

````
    ......          ...................... ..     ........ ..     ........ ..
    ......          .....=+++++++++=$:..........................................
    ......   . . . .....=+++++++++=$$$..
.....               ...=++++++++++$$$$$.........................................
.....                .=++++++++++$$$$$$$..  . ... .  .   .  . ... .  .   .  . ..
....                .~++++++++++7$$$$$$$$  .             . .             . .
 .           . . .  ,?????????+?$$$$$$$$$$.. .   ..   . .  . .   ..   . .  . .
                    .8DDDDDDDDDD$$$$$$$$$$I. .   .    . .  . .   .    . .  . .
                    ..DDDDDDDDDDD$$$$$$$$$$?..        . .  . .        . .  . .
..  .. . .. ....... ...DDDDDDDDDD8$$$$$$$$$$~.             .               .
 .   .       .   .  ....DDDDDDDDDD8$$$$$$$$$7~   .    . .  . ..  .    . .  . ..
             . . .   .. .DDDDDDDDDDD$$$$$$$$$$~.      . .  .          . .  .
...... . .  ... ...     .~DDDDDDDDDDO$$$$$$$$$$,.  .. ... .   ...  .. ... .   ..
...... .                 .=DDDDDDDDDDO$$$$$$$$$$..             .               .
...... . .                .7DDDDDDDDDD$$$$$$$$$$$..            .               .
..........  . . .          .NDDDDDDDDDD$$$$$$$$$$7.
....................        .DDDDDDDDDDD$$$$$$$$$$$.           .               .
............. . . .         ..DDDDDDDDDDD$$$$$$$$$$$............................
...... .                      .D888888888D$$$$$$$$$$I.         .               .
........ ....  ....           =++++++++++$$$$$$$$$$$$? ..    . . . .  ...    . .
...... . .                  .+++++++++++$$$$$$$$$$$$$$~.       .               .
....................       .~++++++++++$$$$$$$$$$$$$$$$,.
...... .                  .:++++++++++$$$$$$$$$$$$$$$$$$,.     .               .
..........               .,++++++++++I$$$$$$$$$$$$$$$$$$$,.    .               .
.....  .                ..=++++++++++$$$$$$$$$$$$$$$$$$$$$..   .               .
. ... ....... ... ..    .+++++++++++$$$$$$$$$$8D$$$$$$$$$$$. . . .         . . .
.....                 ..+++++++++++$$$$$$$$$$DDDD$$$$$$$$$$7...... . . .   . ...
.....      .          .+++++++++++$$$$$$$$$$DDDDDD$$$$$$$$$$7....... .     . ...
......................=++++++++++$$$$$$$$$$ODDDDDDD$$$$$$$$$$7.....  .   .  ....
.....      ..   .   .=++++++++++$$$$$$$$$$$DDDDDDDDD$$$$$$$$$$7.................
.....      .       .=++++++++++$$$$$$$$$$78DDDDDDDDDD$$$$$$$$$$$.... .    .. . .
.....      ..     .~++++++++++$$$$$$$$$$$.,DDDDDDDDDD8$$$$$$$$$$~...............
.....      .    ..~++++++++++$$$$$$$$$$$.. :DDDDDDDDDDO$$$$$$$$$7,.. .   . .....
.....      .     :++++++++++$$$$$$$$$$$. . .:DDDDDDDDDDO$$$$$$$$$$,. .   . .....
.....      .    ,++++++++++I$$$$$$$$$$,. . ..?DDDDDDDDDDZ$$$$$$$$$$. . . . .....
..... .    .  ..++++++++++?$$$$$$$$$$:   .....?DDDDDDDDDDZ$$$$$$$$$$..   ..... .
..... . .  ....++++++++++++=========+++++++++++7DDDDDDDDDDZ$$$$$$$$$$.   . ... .
..... . .. ...=+++++++++++++++++++++++++++++++++DDDDDDDDDDD$$$$$$$$$$7.. . .....
.....      ..=++++++++++++++++++++++++++++++++++=DDDDDDDDDDD$$$$$$$$$$I.........
.....      .=+++++++++++++++++++++++++++++++++++++DDDDDDDDDDD$$$$$$$$$$I........
.....    ..=++++++++++++++++++++++++++++++++++++++=DDDDDDDDDDN$$$$$$$$$$+.......
..... . ..~++++++++++++++++++++++++++++++++++++++++=DDDDDDDDDDD7$$$$$$$$$?......
.....    .DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD$$$$$$$$$$......
..... . ..:8DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDZ$$$$$$$$.......
..... . .  +DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD$$$$$$$.. .....
.....      .IDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD$$$$$. . .....
.....      ..ODDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD7$$:.........
..... .    ...ZDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD$+ .........
.....      .....................................................................
.....     ... . . .        .   .        ........................................
. ..  . .. ..     .        .             . ......... . . . ......... . . . .....
.        .......................................................................
         . .        ............................................................
````

This site was originally a Jam site, a CMS for making one page
websites, made by [Stardotstar](http://stardotstar.com/) during my
time there.  In 2016 Jam sadly closed, so the website was migrated to
github pages.

Stardotstar granted full permission to reuse the site styles and
markup, which meant it was an easy task to port the site here.

For copies of the Lambda Lounge Logo's please see [this repository](https://github.com/RickMoynihan/lambda-lounge-logos)

# Building

This site now uses Jekyll: https://jekyllrb.com/

## MacOS

The system Ruby won't work. You may want to use rvm/rbenv if you're familiar
with them, but the following using Brew's ruby seems to work.
`brew link ruby` doesn't work, so the install gives the following command
to shadow the link within your Bash profile.

```
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile

sudo gem install bundler
```

## General

Run the commands within Bundler, so:

```
gem install bundler # sudo if require
bundle install

bundle exec rake serve
```
