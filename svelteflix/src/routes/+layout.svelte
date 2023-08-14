<script>
	import '../app.css';
	import logo from '$lib/images/logo.svg';
	import provided from '$lib/images/provided.svg';
</script>

<nav
	class="mx-auto flex w-full h-12 bg-yellow-50 items-center justify-between max-w-col py-0 px-side text-accent"
>
	<a href="/">
		<img class="h-6" alt="SvelteFlix" src={logo} />
	</a>

	<div class="flex gap-4">
		<a href="/search">Search</a>
		<a href="/watchlist">Watchlist</a>
		<a href="/login">Log in</a>
	</div>
</nav>
<main class="mx-auto flex w-full bg-blue-300 max-w-col py-0 px-side text-accent flex-col">
	<slot />
</main>

<footer
	class="mx-auto flex w-full h-12 bg-yellow-300 items-center justify-center max-w-col py-0 px-side text-accent"
>
	<p class="flex flex-col gap-1 justify-center items-center">
		Data provided by <a href="https://www.themoviedb.org/">
			<img class="h-2" src={provided} alt="provided url" />
		</a>
	</p>
</footer>
