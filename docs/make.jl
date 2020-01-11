using Documenter, JuliaForDataScience

makedocs(;
    modules=[JuliaForDataScience],
    format=Documenter.HTML(),
    pages=[
        "Home"                      => "00-home.md",
        "01 - Introduction"         => "01-intro.md",
        "02 - Data Visualization"   => "02-dataviz.md"
    ],
    repo="https://github.com/joshday/JuliaForDataScience.jl/blob/{commit}{path}#L{line}",
    sitename="Julia for Data Science",
    authors="joshday <emailjoshday@gmail.com>",
    assets=String[],
)

deploydocs(;
    repo="github.com/joshday/JuliaForDataScience.jl",
)
