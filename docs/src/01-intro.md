# 1. Introduction

## 1.1 Getting Julia

We recommend getting Julia from one of the official binaries at [https://julialang.org/downloads/](https://julialang.org/downloads/).  The stable release as of this writing is v1.3.1.

Make sure you check out the [platform specific instructions](https://julialang.org/downloads/platform/) for the platfrom (Windows, Linux, or Apple) you are using. 

!!! tip "Launching Julia from the command line"
    You can launch Julia by double-clicking the installed binary file.  You can launch Julia from your terminal
    

## 1.2 Installing Packages

Julia comes with the **Pkg** package manager to help you install and keep track of dependencies for different projects.

```@repl 1
using Pkg

Pkg.add("UnicodePlots")

using UnicodePlots

lineplot(rand(10), title="My First Plot!")
```
