const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.TiledBg,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Touch.Cnds.OnTapGestureObject
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Touch: 0},
	{Sprite8: 0},
	{materi: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite15: 0},
	{Sprite17: 0},
	{Sprite14: 0},
	{Sprite18: 0},
	{Sprite20: 0},
	{TiledBackground: 0},
	{Sprite7: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	materi: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Sprite7: class extends self.ISpriteInstance {}
}