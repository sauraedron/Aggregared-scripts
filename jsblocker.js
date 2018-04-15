//get All the blocked addresses
var a = document.getElementById("blocked-addresses").childNodes
//prepare a fresh list by appending it here + new mails
blockAddress = []
//add the domains to blocked lists
for(i=0; i<blockAddress.length; i++)
{
	document.getElementById('options-addBlockedAdddress').value = blockAddress[i].substr(blockAddress[i].indexOf("@")+1);
	document.getElementsByName("addBlockedAddress")[0].click()
}


//removing existing blocked addresses
existing = document.getElementById("blocked-addresses").childNodes
for(i=0; i<existing.length; i++)
{
	var b = existing[i];
console.log(b)
	b.className="selected";
	
}
