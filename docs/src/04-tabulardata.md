```@setup 1
using Pkg
Pkg.add("DataFrames")
```

# 3. Tabular Data

## DataFrames.jl

```@example 1
using DataFrames

df = DataFrame()

df.x = rand(100)
df.y = 1:100

df
```