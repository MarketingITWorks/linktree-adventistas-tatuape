# Linktree — Adventistas Tatuapé

Endereço final: **https://link.adventistastatuape.org**

## Arquivos

| Arquivo | Para quê |
|---|---|
| `index.html` | A página (visual). Não precisa mexer. |
| `config.js` | **Todo o conteúdo**: destaque, links, WhatsApp, horários, redes. É o único arquivo que muda no dia a dia. |
| `CNAME` | Diz ao GitHub Pages qual é o domínio (link.adventistastatuape.org). |
| `logo-vertical-branco.svg` | Logo oficial vertical em branco (topo da página). |
| `favicon.png` | Ícone da aba. |
| `img/` | Imagens dos destaques (4:5, ex.: 864x1080). |

## Publicar (uma vez só, ~15 min)

1. **GitHub** — crie um repositório público, ex.: `linktree-adventistas-tatuape`, e suba **todo o conteúdo da pasta** (incluindo a pasta `img`).
2. Em **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main` / `(root)`. Salve.
3. Em **Custom domain** coloque `link.adventistastatuape.org`.
4. **DNS** — onde o domínio adventistastatuape.org é administrado (Registro.br, Cloudflare ou o suporte da InChurch), crie:

   | Tipo | Nome | Valor |
   |---|---|---|
   | CNAME | `link` | `SEU-USUARIO.github.io` |

   Isso **não afeta** o site principal (adventistastatuape.org continua na InChurch).
5. Depois que o DNS propagar (de minutos a algumas horas), volte em **Settings → Pages** e marque **Enforce HTTPS**.
6. Coloque `link.adventistastatuape.org` na bio do Instagram.

## Mudar links

Peça ao Claude (ex.: "tira o destaque da Quarta Kids e coloca o Caminho do Natal"). Ele edita o `config.js` e faz o commit; o GitHub Pages republica em ~1 minuto.

Se for editar à mão: abra `config.js` no GitHub → ícone de lápis → altere → *Commit changes*.
- Tirar um link do ar sem apagar: `ativo: false`
- A ordem dos botões é a ordem da lista
- Ícones: youtube, instagram, facebook, spotify, tiktok, coracao, oracao, calendario, celular, mapa, site, livro, play, pessoas, presente, whatsapp, email, link, estrela, musica

## Pendências antes de divulgar

- [ ] Número do WhatsApp da igreja (`whatsapp.numero`) — enquanto vazio, o botão abre o "Fale conosco" do site
- [ ] Foto do destaque "Minha Vida é Uma Viagem" (4:5, salvar em `img/` e trocar o campo `imagem`)
- [ ] Link do app na App Store (`url_ios`), se existir
- [ ] Conferir se o canal do YouTube é mesmo `@adventistastatuape`
