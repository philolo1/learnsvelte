<script>
	import '../app.css';
</script>

<nav
	class="flex w-full h-12 bg-yellow-50 items-center justify-between max-w-col py-0 px-col text-accent"
>
	<a href="/"> SvelteFlix</a>

	<span class="bg-green-50 h-20 w-40" />

	<div>
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>
<slot />
