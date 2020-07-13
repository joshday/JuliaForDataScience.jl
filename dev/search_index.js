var documenterSearchIndex = {"docs":
[{"location":"01-intro/#.-Introduction-1","page":"1 Introduction","title":"1. Introduction","text":"","category":"section"},{"location":"01-intro/#.1-Getting-Julia-1","page":"1 Introduction","title":"1.1 Getting Julia","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"We recommend getting Julia from one of the official binaries at https://julialang.org/downloads/.  The stable release as of this writing is v1.4.2.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"note: Platform Specific Instructions\nCheck out the platform specific instructions for your platfrom (Windows, Linux, or Apple) to learn how to start julia by typing julia in the command line.","category":"page"},{"location":"01-intro/#.2-Installing-Packages-1","page":"1 Introduction","title":"1.2 Installing Packages","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Julia comes with the Pkg package manager to help you install and keep track of dependencies for different projects.  A thorough overview of how to use Pkg is available at https://docs.julialang.org/en/v1/stdlib/Pkg/","category":"page"},{"location":"01-intro/#First,-load-**Pkg**-1","page":"1 Introduction","title":"First, load Pkg","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using Pkg","category":"page"},{"location":"01-intro/#Next,-let's-add-a-package-([**UnicodePlots**](https://github.com/Evizero/UnicodePlots.jl)).-1","page":"1 Introduction","title":"Next, let's add a package (UnicodePlots).","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"note: REPL Modes\nJulia has several REPL (read-eval-print loop) modes, such as:? help mode (search for documentation)\n; shell mode (run normal commands in your terminal)\n] Pkg mode (add/remove/update/etc. your packages)","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Here we are using Pkg.add(<package>) but we could also use ] to enter Pkg mode and then write add <package>.","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Pkg.add(\"UnicodePlots\")","category":"page"},{"location":"01-intro/#Now-load-our-installed-package-and-try-it-out-1","page":"1 Introduction","title":"Now load our installed package and try it out","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"using UnicodePlots\n\nhistogram(randn(1000), title=\"My First Plot!\")","category":"page"},{"location":"01-intro/#.3-Discovering-Packages-1","page":"1 Introduction","title":"1.3 Discovering Packages","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"https://juliahub.com","category":"page"},{"location":"01-intro/#.4-Getting-Help-1","page":"1 Introduction","title":"1.4 Getting Help","text":"","category":"section"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"If you get stuck on something, my recommendations for steps to get help are:","category":"page"},{"location":"01-intro/#","page":"1 Introduction","title":"1 Introduction","text":"Google it\nAsk on http://julialang.slack.com (try the #helpdesk channel)\nAsk on https://discourse.julialang.org (try the first-steps tag)","category":"page"},{"location":"03-loadingsaving/#Loading-and-Saving-Data-1","page":"3 Loading/Saving Data","title":"Loading and Saving Data","text":"","category":"section"},{"location":"03-loadingsaving/#CSV-1","page":"3 Loading/Saving Data","title":"CSV","text":"","category":"section"},{"location":"03-loadingsaving/#SQL-Databases-1","page":"3 Loading/Saving Data","title":"SQL Databases","text":"","category":"section"},{"location":"03-loadingsaving/#HDF5-1","page":"3 Loading/Saving Data","title":"HDF5","text":"","category":"section"},{"location":"03-loadingsaving/#Serialization-1","page":"3 Loading/Saving Data","title":"Serialization","text":"","category":"section"},{"location":"04-tabulardata/#","page":"4 Tabular Data","title":"4 Tabular Data","text":"using Pkg\nPkg.add(\"DataFrames\")","category":"page"},{"location":"04-tabulardata/#.-Tabular-Data-1","page":"4 Tabular Data","title":"3. Tabular Data","text":"","category":"section"},{"location":"04-tabulardata/#DataFrames.jl-1","page":"4 Tabular Data","title":"DataFrames.jl","text":"","category":"section"},{"location":"04-tabulardata/#","page":"4 Tabular Data","title":"4 Tabular Data","text":"using DataFrames\n\ndf = DataFrame()\n\ndf.x = rand(100)\ndf.y = 1:100\n\ndf","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"]add Plots UnicodePlots","category":"page"},{"location":"02-dataviz/#.-Data-Visualization-1","page":"2 Data Visualization","title":"2. Data Visualization","text":"","category":"section"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"Julia does not come packaged with a graphics/plotting library.  Instead, there is a variety of plotting packages to choose from.  We highly recommend beginning your plotting experience in Julia with Plots.","category":"page"},{"location":"02-dataviz/#[Plots](https://github.com/JuliaPlots/Plots.jl)-1","page":"2 Data Visualization","title":"Plots","text":"","category":"section"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"Plots is an API and toolset for creating plots through other plotting packages, such as:","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"GR (default backend)\nPyPlot\nPlotlyJS\nand more","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"note: Note\nGR is typically the best-supported backend.  It is great for publication-quality plots.  For interactivity, try using plotly() or plotlyjs().","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"note: Note\nEach backend has an associated function for switching to it , e.g. gr() for GR, plotlyjs() for PlotlyJS.","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"using Plots\n\nplot(rand(10, 2), color=[:blue :red])\nsavefig(\"plot1.png\"); nothing  # hide","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"(Image: )","category":"page"},{"location":"02-dataviz/#Core-Principles-1","page":"2 Data Visualization","title":"Core Principles","text":"","category":"section"},{"location":"02-dataviz/#Plot-Recipes-1","page":"2 Data Visualization","title":"Plot Recipes","text":"","category":"section"},{"location":"02-dataviz/#[UnicodePlots](https://github.com/Evizero/UnicodePlots.jl)-1","page":"2 Data Visualization","title":"UnicodePlots","text":"","category":"section"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"UnicodePlots is one of the available backends to Plots, but is useful to learn on its own because:","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"It has a much shorter time-to-first-plot than Plots. \nYou don't have always have access to a display (e.g. working in a remote server environment).","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"using UnicodePlots\n\nhistogram(randn(1000))","category":"page"},{"location":"02-dataviz/#","page":"2 Data Visualization","title":"2 Data Visualization","text":"warning: Warning\nIf you type using Plots and using UnicodePlots into the same Julia session, there will be some namespace collisions, e.g. Plots and UnicodePlots export some of the same names such as histogram.  In these cases, you need to explicitly where a name is coming from: UnicodePlots.histogram(...).","category":"page"},{"location":"#Julia-for-Data-Science-1","page":"Welcome","title":"Julia for Data Science","text":"","category":"section"},{"location":"#","page":"Welcome","title":"Welcome","text":"Dr. Josh Day","category":"page"},{"location":"#Welcome-1","page":"Welcome","title":"Welcome","text":"","category":"section"},{"location":"#","page":"Welcome","title":"Welcome","text":"Welcome to the website for \"Julia for Data Science\".  With this book, you'll learn how to work with data in Julia, including:","category":"page"},{"location":"#","page":"Welcome","title":"Welcome","text":"Loading and saving data\nWorking with tabular data (e.g. DataFrames)\nCreating data visualizations\nCommunicating results with reproducibility\nUsing a variety of packages focused on data science","category":"page"},{"location":"#","page":"Welcome","title":"Welcome","text":"danger: This book is a work in progress\nWhile this site is actively being developed, many sections are still incomplete.  Please have patience (or ping @joshday for which section you think deserves focus next).","category":"page"},{"location":"#Conventions-1","page":"Welcome","title":"Conventions","text":"","category":"section"},{"location":"#","page":"Welcome","title":"Welcome","text":"\"Julia for Data Science\" adopts a number of conventions to make it easier to find the content you are looking for:","category":"page"},{"location":"#","page":"Welcome","title":"Welcome","text":"BoldText: a Julia package name.","category":"page"}]
}
