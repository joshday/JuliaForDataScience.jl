var documenterSearchIndex = {"docs":
[{"location":"01-intro/#.-Introduction-1","page":"1 Introduction","title":"1. Introduction","text":"","category":"section"},{"location":"01-intro/#.1-Getting-Julia-1","page":"1 Introduction","title":"1.1 Getting Julia","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"We recommend getting Julia from one of the official binaries at https://julialang.org/downloads/.  The stable release as of this writing is v1.3.1.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Make sure you check out the platform specific instructions for the platfrom (Windows, Linux, or Apple) you are using. ","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"tip: Launching Julia from the command line (Apple)\nI like adding a symbolic link to a directory on my PATH environmental variable (such as /usr/local/bin) so that Julia can be opened just by typing julia on the command line.ln -s /Applications/Julia-1.3.app/Contents/Resources/julia/bin/julia /usr/local/bin/julia","category":"page"},{"location":"01-intro/#.2-Installing-Packages-1","page":"1 Introduction","title":"1.2 Installing Packages","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Julia comes with the Pkg package manager to help you install and keep track of dependencies for different projects.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"First, load Pkg\n","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using Pkg","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Next, let's add a package (UnicodePlots).","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"note: REPL Modes\nJulia has several REPL (read-eval-print loop) modes, such as:? help mode (search for documentation)\n; shell mode (run normal commands in your terminal)\n] Pkg mode (add/remove/update/etc. your packages)","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Pkg.add(\"UnicodePlots\")  # Alternatively, `] add UnicodePlots`","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Now load our installed package and try it out","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using UnicodePlots\n\nlineplot(rand(10), title=\"My First Plot!\")","category":"page"},{"location":"02-dataviz/#.-Data-Visualization-1","page":"2 Data Visualization","title":"2. Data Visualization","text":"","category":"section"},{"location":"02-dataviz/#.1-Plots.jl-1","page":"2 Data Visualization","title":"2.1 Plots.jl","text":"","category":"section"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"Plots is an API and toolset for creating plots through other plotting packages, such as:","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"GR\nPyPlot\nPlotlyJS\nand more","category":"page"},{"location":"#Julia-for-Data-Science-1","page":"Home","title":"Julia for Data Science","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Josh Day","category":"page"},{"location":"#Welcome-1","page":"Home","title":"Welcome","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Welcome to the website for \"Julia for Data Science\".  With this book, you'll learn how to work with data in Julia, from loading and saving to data visualization to modeling. ","category":"page"},{"location":"#How-to-read-this-book-1","page":"Home","title":"How to read this book","text":"","category":"section"},{"location":"#Conventions-1","page":"Home","title":"Conventions","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"BoldText: a Julia package name.","category":"page"}]
}
