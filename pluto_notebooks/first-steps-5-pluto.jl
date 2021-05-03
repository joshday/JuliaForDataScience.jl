### A Pluto.jl notebook ###
# v0.14.3

using Markdown
using InteractiveUtils

# This Pluto notebook uses @bind for interactivity. When running this notebook outside of Pluto, the following 'mock version' of @bind gives bound variables a default value (instead of an error).
macro bind(def, element)
    quote
        local el = $(esc(element))
        global $(esc(def)) = Core.applicable(Base.get, el) ? Base.get(el) : missing
        el
    end
end

# ╔═╡ 55593255-a4ca-49df-9f6e-12411e9fe9d2
using PlutoUI

# ╔═╡ f46bcfa1-445d-4928-abd0-a551cef1e36f
using Plots

# ╔═╡ 361b5f40-6c24-46b2-a389-f819e3481f71
md"# Interactivity:  

Try changing `x` to a different number."

# ╔═╡ dd18192a-a85c-11eb-202d-914944b9ef89
x = 4

# ╔═╡ d88098cf-aa9a-424b-8682-77aad6901795
y = 2

# ╔═╡ 71eac437-61c2-42b4-86a1-4a8b73b67f85
x + y

# ╔═╡ 798d0410-8615-4164-935b-1419e1ee61b9
md"# Rendering as HTML"

# ╔═╡ c77a4e1e-a8be-41c8-aaff-9b066184c24c
md"""
### This is an h3 tag written via Markdown

- I'm a bullet
- Me too!
  - I'm a nested bullet

| I'm  | a  | table |
|------|----|-------|
| this | is | neat  |
"""

# ╔═╡ 13b03cc2-f2cf-40d6-8b08-bedc7a0acc95
md"# Using `@bind`"

# ╔═╡ e762440f-bfc4-411e-a63b-d61fc9ffc4ae
@bind my_input html"<input></input>"

# ╔═╡ 94e52639-6072-4649-a7b9-33efa2791918
my_input

# ╔═╡ ccac4170-071a-4dd8-b87c-c2cb23f61819
md"# Using PlutoUI"

# ╔═╡ 55518562-76b8-4969-bc03-efe3bd138e68
@bind thing Slider(1:10)

# ╔═╡ 6d676090-70e7-4ef8-b888-ea0b7a3c0491
thing

# ╔═╡ b7aa9aa5-49d6-4baa-962b-f65dc748b9f2
md"# Custom Display Methods"

# ╔═╡ 39af1a40-21e9-4e02-8193-b33ffd77ec98
begin
	struct Thing end 
	
	function Base.show(io::IO, ::MIME"text/html", o::Thing) 
		print(io, "<div style='background-color:blue;height:20px;width: 100%'>")
		print(io, "</div>")
	end
end

# ╔═╡ 353b54bf-2cd7-4ece-840c-01d9b121dbbd
Thing()

# ╔═╡ f268819d-e75b-4818-8779-b719625b5b4c
md"# Putting this all Together"

# ╔═╡ 5b5e3de9-8413-4ab9-854d-69832e677c1d
begin
	data = randn(100)
	nobs_ui = @bind nobs Slider(10:10:100)
	series_ui = @bind series Select(["scatter", "line", "bar"])
	
	md"""
	This is a small UI for editing the elements of a plot.

	- It's neat!

	$nobs_ui  $series_ui
	"""
end

# ╔═╡ 784f192c-0830-44fa-bf09-bcc0752961c0
plot(data[1:nobs], seriestype=Symbol(series), title="Nobs: $nobs")

# ╔═╡ Cell order:
# ╟─361b5f40-6c24-46b2-a389-f819e3481f71
# ╠═dd18192a-a85c-11eb-202d-914944b9ef89
# ╠═d88098cf-aa9a-424b-8682-77aad6901795
# ╠═71eac437-61c2-42b4-86a1-4a8b73b67f85
# ╟─798d0410-8615-4164-935b-1419e1ee61b9
# ╟─c77a4e1e-a8be-41c8-aaff-9b066184c24c
# ╟─13b03cc2-f2cf-40d6-8b08-bedc7a0acc95
# ╠═e762440f-bfc4-411e-a63b-d61fc9ffc4ae
# ╠═94e52639-6072-4649-a7b9-33efa2791918
# ╟─ccac4170-071a-4dd8-b87c-c2cb23f61819
# ╠═55593255-a4ca-49df-9f6e-12411e9fe9d2
# ╠═55518562-76b8-4969-bc03-efe3bd138e68
# ╠═6d676090-70e7-4ef8-b888-ea0b7a3c0491
# ╟─b7aa9aa5-49d6-4baa-962b-f65dc748b9f2
# ╠═39af1a40-21e9-4e02-8193-b33ffd77ec98
# ╠═353b54bf-2cd7-4ece-840c-01d9b121dbbd
# ╟─f268819d-e75b-4818-8779-b719625b5b4c
# ╠═f46bcfa1-445d-4928-abd0-a551cef1e36f
# ╠═5b5e3de9-8413-4ab9-854d-69832e677c1d
# ╠═784f192c-0830-44fa-bf09-bcc0752961c0
