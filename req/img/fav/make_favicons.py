# Generates the AJ favicons from the same vector geometry as favicon.svg.
# Rounded green-gradient tile, "AJ" drawn as strokes (no font needed).
from PIL import Image, ImageDraw

S = 512            # master render size
G = S / 64.0       # 64-unit design grid -> pixels
TOP = (0x5F, 0xF0, 0xAB)   # --accent-bright
BOT = (0x1F, 0x8F, 0x63)   # --accent-deep
INK = (4, 20, 13, 255)     # --accent-ink


def gradient():
    img = Image.new('RGB', (S, S))
    px = img.load()
    for y in range(S):
        for x in range(S):
            t = (x + y) / (2 * S - 2)
            px[x, y] = tuple(int(TOP[i] + (BOT[i] - TOP[i]) * t) for i in range(3))
    return img


def glyphs(d, stroke):
    w = stroke * G

    def ln(pts):
        d.line([(x * G, y * G) for x, y in pts], fill=INK, width=round(w), joint='curve')

    def cap(x, y):
        r = w / 2
        d.ellipse([x * G - r, y * G - r, x * G + r, y * G + r], fill=INK)

    # A: two legs + crossbar
    ln([(13, 45), (20, 19), (27, 45)])
    ln([(15.8, 35), (24.2, 35)])
    for p in [(13, 45), (27, 45), (20, 19), (15.8, 35), (24.2, 35)]:
        cap(*p)

    # J: stem + hook (semicircle, centre 41,36 r7)
    ln([(48, 19), (48, 36)])
    r = 7 * G
    d.arc([(41 - 7) * G, (36 - 7) * G, (41 + 7) * G, (36 + 7) * G],
          0, 180, fill=INK, width=round(w))
    for p in [(48, 19), (48, 36), (34, 36)]:
        cap(*p)


def master(stroke, rounded=True):
    img = Image.new('RGBA', (S, S), (0, 0, 0, 0))
    if rounded:
        mask = Image.new('L', (S, S), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, S - 1, S - 1], radius=int(S * 0.29), fill=255)
        img.paste(gradient(), (0, 0), mask)
    else:
        img.paste(gradient(), (0, 0))
    glyphs(ImageDraw.Draw(img), stroke)
    return img


m = master(5.5)            # normal weight
mb = master(7.0)           # bolder, reads better at 16px
sq = master(5.5, rounded=False).convert('RGB')  # apple-touch: iOS masks corners itself

rs = Image.LANCZOS
i16 = mb.resize((16, 16), rs)
i32 = m.resize((32, 32), rs)
i48 = m.resize((48, 48), rs)

i16.save('favicon-16x16.png')
i32.save('favicon-32x32.png')
i48.save('favicon.ico', format='ICO', append_images=[i32, i16])
sq.resize((180, 180), rs).save('apple-touch-icon.png')
m.resize((192, 192), rs).save('android-chrome-192x192.png')
m.save('android-chrome-512x512.png')

ico = Image.open('favicon.ico')
print('ico sizes:', ico.info.get('sizes'))
print('done')
