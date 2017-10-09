export function __evn__(){
	return location.host.indexOf('127.0.0.1') !== -1
      || location.host.indexOf('localhost') !== -1
      || location.host.indexOf('192.168.1') !== -1;
}