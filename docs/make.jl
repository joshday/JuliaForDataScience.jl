using Documenter, JuliaForDataScience

makedocs(;
    modules=[JuliaForDataScience],
    format=Documenter.HTML(assets = ["assets/style.css"]),
    pages=[
        "Home"                      => "index.md",
        "1 Introduction"         => "01-intro.md",
        "2 Data Visualization"   => "02-dataviz.md"
    ],
    repo="https://github.com/joshday/JuliaForDataScience.jl/blob/{commit}{path}#L{line}",
    sitename="Julia for Data Science",
    authors="joshday <emailjoshday@gmail.com>",
)

deploydocs(;
    repo="github.com/joshday/JuliaForDataScience.jl"
)
