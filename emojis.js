// emojis.js

var str = "! !! !!! ? !? ?! ?? ??? :‑) :) :D :o) :] :3 :c) :> =] 8) =) :} :^) :っ) :‑D 8‑D 8D x‑D xD X‑D XD =‑D =D =‑3 =3 B^D :-)) >:[ :‑( :( :‑c :c :‑< :っC :< :‑[ :[ :{ ;( :-|| :@ >:( :'‑( :'( :'‑) :') D:< D: D8 D; D= DX v.v D‑': >:O :‑O :O :‑o :o 8‑0 O_O o‑o O_o o_O o_o O-O O.O o.O O.o o.o :* :-* :^* ( '}{' ) ;‑) ;) *-) *) ;‑] ;] ;D ;^) :‑, >:P :‑P :P X‑P x‑p xp XP :‑p :p =p :‑Þ :Þ :þ :‑þ :‑b :b d: >:\\ >:/ :‑/ :‑. :/ :\\ =/ =\\ :L =L :S >.< :$ ^^ :‑X :X :‑# :# O:‑) 0:‑3 0:3 0:‑) 0:) 0;^) >:) >;) >:‑) }:‑) }:) 3:‑) 3:) o/\\o ^5 >_> <_< |;‑) |‑O :‑J :‑& :& #‑) %‑) %) :‑###.. :###.. <:‑| ಠ_ಠ ( ͡° ͜ʖ ͡°) ( ͡°͜ ͡°) <*)))‑{ ><(((*> ><> <3";


function splitEmoticonsIntoArrayOfStrings() {
	var emoticons = str.split(" ");
	console.log(emoticons);
	return emoticons;
}