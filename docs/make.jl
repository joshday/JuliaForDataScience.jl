using Documenter, JuliaForDataScience

makedocs(;
    modules=[JuliaForDataScience],
    format=Documenter.HTML(
        assets = [
            "assets/style.css",
            asset("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap", class=:css)
        ], 
        analytics="UA-72795550-4"
        ),
    pages=[
        "Welcome"               => "index.md",
        "1 Introduction"        => "01-intro.md",
        "2 Data Visualization"  => "02-dataviz.md",
        "3 Loading/Saving Data" => "03-loadingsaving.md",
        "4 Tabular Data"        => "04-tabulardata.md"
    ],
    repo="https://github.com/joshday/JuliaForDataScience.jl/blob/{commit}{path}#L{line}",
    sitename="Julia for Data Science",
    authors="joshday <emailjoshday@gmail.com>",
)

deploydocs(;
    repo="github.com/joshday/JuliaForDataScience.jl"
)
