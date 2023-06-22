export const getHashParams = () => {
	return window.location.hash
	  .substring(1)
	  .split("&")
	  .reduce(function(initial: { [key: string]: any; }, item) {
		if (item) {
		  var parts = item.split("=");
		  initial[parts[0]] = decodeURIComponent(parts[1]);
		}
		return initial;
	  }, {});
  }

const authEndpoint = 'https://accounts.spotify.com/authorize';

export const getAuthorizeHref = (): string => {
  const clientId = '1af9eba0816d4494b162a17b1d1a4e9a';
  const redirectUri = 'http://localhost:3000/';
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user-library-read&response_type=token`;
}