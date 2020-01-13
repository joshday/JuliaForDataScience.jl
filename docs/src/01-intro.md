# 1. Introduction

## 1.1 Getting Julia

We recommend getting Julia from one of the official binaries at [https://julialang.org/downloads/](https://julialang.org/downloads/).  The stable release as of this writing is v1.3.1.

Make sure you check out the [platform specific instructions](https://julialang.org/downloads/platform/) for the platfrom (Windows, Linux, or Apple) you are using. 

!!! tip "Launching Julia from the command line (Apple)"
    I like adding a symbolic link to a directory on my `PATH` environmental variable (such as `/usr/local/bin`) so that Julia can be opened just by typing `julia` on the command line.
    ```
    ln -s /Applications/Julia-1.3.app/Contents/Resources/julia/bin/julia /usr/local/bin/julia
    ```
    

## 1.2 Installing Packages

Julia comes with the **Pkg** package manager to help you install and keep track of dependencies for different projects.

- First, load **Pkg**
  
```@repl 1
using Pkg
```

- Next, let's add a package ([**UnicodePlots**](https://github.com/Evizero/UnicodePlots.jl)).

!!! note "REPL Modes"
    Julia has several REPL (read-eval-print loop) modes, such as:
    - `?` help mode (search for documentation)
    - `;` shell mode (run normal commands in your terminal)
    - `]` **Pkg** mode (add/remove/update/etc. your packages)

Here we are using `Pkg.add(<package>)` but we could also use `]` to enter **Pkg** mode and then write `add <package>`.

```@repl 1
Pkg.add("UnicodePlots")
```
- Now load our installed package and try it out

```@repl 1
using UnicodePlots

lineplot(rand(10), title="My First Plot!")
```
