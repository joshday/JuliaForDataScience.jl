using Documenter, JuliaForDataScience

makedocs(;
    modules=[JuliaForDataScience],
    format=Documenter.HTML(),
    pages=[
        "Home" => "index.md",
    ],
    repo="https://github.com/joshday/JuliaForDataScience.jl/blob/{commit}{path}#L{line}",
    sitename="JuliaForDataScience.jl",
    authors="joshday <emailjoshday@gmail.com>",
    assets=String[],
)

deploydocs(;
    repo="github.com/joshday/JuliaForDataScience.jl",
)
