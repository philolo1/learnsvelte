<script>
	import '../app.css';
</script>

<nav
	class="flex w-full h-12 m-auto bg-yellow-50 items-center justify-between max-w-col py-0 px-side text-accent"
>
	<a href="/"> SvelteFlix</a>

	<div>
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>
<slot />
