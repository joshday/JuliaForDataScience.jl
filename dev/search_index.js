var documenterSearchIndex = {"docs":
[{"location":"01-intro/#.-Introduction-1","page":"1 Introduction","title":"1. Introduction","text":"","category":"section"},{"location":"01-intro/#.1-Getting-Julia-1","page":"1 Introduction","title":"1.1 Getting Julia","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"We recommend getting Julia from one of the official binaries at https://julialang.org/downloads/.  The stable release as of this writing is v1.3.1.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Make sure you check out the platform specific instructions for the platfrom (Windows, Linux, or Apple) you are using. ","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"tip: Launching Julia from the command line (Apple)\nI like adding a symbolic link to a directory on my PATH environmental variable (such as /usr/local/bin) so that Julia can be opened just by typing julia on the command line.ln -s /Applications/Julia-1.3.app/Contents/Resources/julia/bin/julia /usr/local/bin/julia","category":"page"},{"location":"01-intro/#.2-Installing-Packages-1","page":"1 Introduction","title":"1.2 Installing Packages","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Julia comes with the Pkg package manager to help you install and keep track of dependencies for different projects.  A thorough overview of how to use Pkg is available at https://docs.julialang.org/en/v1/stdlib/Pkg/","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"First, load Pkg","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using Pkg","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Next, let's add a package (UnicodePlots).","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"note: REPL Modes\nJulia has several REPL (read-eval-print loop) modes, such as:? help mode (search for documentation)\n; shell mode (run normal commands in your terminal)\n] Pkg mode (add/remove/update/etc. your packages)","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Here we are using Pkg.add(<package>) but we could also use ] to enter Pkg mode and then write add <package>.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Pkg.add(\"UnicodePlots\")","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Now load our installed package and try it out","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using UnicodePlots\n\nhistogram(randn(1000), title=\"My First Plot!\")","category":"page"},{"location":"01-intro/#.3-Discovering-Packages-1","page":"1 Introduction","title":"1.3 Discovering Packages","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"https://pkg.julialang.org/docs/ is a fantastic resource for finding a package with functionality you are looking for.  \"Julia for Data Science\" covers many packages, but cannot exhaustively go over everything you may need as a data scientist.","category":"page"},{"location":"01-intro/#.4-Getting-Help-1","page":"1 Introduction","title":"1.4 Getting Help","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"If you get stuck on something, my recommendations for steps to get help are:","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Google it\nAsk on http://julialang.slack.com (try the #helpdesk channel)\nAsk on https://discourse.julialang.org (try the first-steps tag)\nThe general advice given at https://discourse.julialang.org/t/psa-make-it-easier-to-help-you/14757 is useful.","category":"page"},{"location":"02-dataviz/#.-Data-Visualization-1","page":"2 Data Visualization","title":"2. Data Visualization","text":"","category":"section"},{"location":"02-dataviz/#.1-Plots.jl-1","page":"2 Data Visualization","title":"2.1 Plots.jl","text":"","category":"section"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"Plots is an API and toolset for creating plots through other plotting packages, such as:","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"GR\nPyPlot\nPlotlyJS\nand more","category":"page"},{"location":"#Julia-for-Data-Science-1","page":"Home","title":"Julia for Data Science","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Josh Day","category":"page"},{"location":"#Welcome-1","page":"Home","title":"Welcome","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Welcome to the website for \"Julia for Data Science\".  With this book, you'll learn how to work with data in Julia, including:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Loading and saving data\nWorking with tabular data (e.g. DataFrames)\nCreating data visualizations\nCommunicating results with reproducibility\nUsing a variety of packages focused on data science","category":"page"},{"location":"#","page":"Home","title":"Home","text":"danger: This book is a work in progress\nWhile this site is actively being developed, many sections are still incomplete.  Please have patience (or ping @joshday for which section you think deserves focus next).","category":"page"},{"location":"#Conventions-1","page":"Home","title":"Conventions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"\"Julia for Data Science\" adopts a number of conventions to make it easier to find the content you are looking for:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"BoldText: a Julia package name.","category":"page"}]
}
