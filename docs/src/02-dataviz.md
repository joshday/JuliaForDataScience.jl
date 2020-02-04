```@setup
]add Plots UnicodePlots
```

# 2. Data Visualization

Julia does not come packaged with a graphics/plotting library.  Instead, there is a variety of plotting packages to choose from.  We highly recommend beginning your plotting experience in Julia with **Plots**.

## [Plots](https://github.com/JuliaPlots/Plots.jl)

**Plots** is an API and toolset for creating plots through other plotting packages, such as:

- [**GR**](https://github.com/jheinen/GR.jl) (default backend)
- [**PyPlot**](https://github.com/JuliaPy/PyPlot.jl)
- [**PlotlyJS**](https://github.com/sglyon/PlotlyJS.jl)
- [and more](http://docs.juliaplots.org/latest/backends/)

```@example 1
using Plots

plot(rand(10, 2), color=[:blue :red])
```

## [UnicodePlots](https://github.com/Evizero/UnicodePlots.jl)

**UnicodePlots** is one of the available backends to **Plots**, but is useful to learn on its own since it has a much shorter time-to-first-plot than **Plots**. 

```@example 2
using UnicodePlots

histogram(randn(1000))
```

!!! warning
    If you type `using Plots` and `using UnicodePlots` into the same Julia session, there will be some namespace collisions, e.g. **Plots** and **UnicodePlots** export some of the same names such as `histogram`.  In these cases, you need to explicitly where a name is coming from: `UnicodePlots.histogram(...)`.
