```@setup 1
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

!!! note
    **GR** is typically the best-supported backend.  It is great for publication-quality plots.  For
    displaying on the web, we recommend using `plotly()` or `plotlyjs()`.

!!! note
    Each backend has an associated function for switching to it , e.g. `gr()` for **GR**, `plotlyjs()` for **PlotlyJS**.

```@example 1
using Plots

plot(rand(10, 2), color=[:blue :red])
savefig("plot1.png"); nothing  # hide
```
![](plot1.png)

### Core Principles


### Plot Recipes

## [UnicodePlots](https://github.com/Evizero/UnicodePlots.jl)

**UnicodePlots** is one of the available backends to **Plots**, but is useful to learn on its own because:

1. It has a much shorter time-to-first-plot than **Plots**. 
2. You don't have always have access to a display (e.g. working in a remote server environment).

```@example 2
using UnicodePlots

histogram(randn(1000))
```

!!! warning
    If you type `using Plots` and `using UnicodePlots` into the same Julia session, there will be some namespace collisions, e.g. **Plots** and **UnicodePlots** export some of the same names such as `histogram`.  In these cases, you need to explicitly where a name is coming from: `UnicodePlots.histogram(...)`.
