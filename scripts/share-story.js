const {fbLink, tgLink, twLink, shareLink} = {
  fbLink: document.querySelectorAll('.fb-share'),
  tgLink: document.querySelectorAll('.tg-share'),
  twLink: document.querySelectorAll('.tw-share'),
  shareLink: document.querySelectorAll('.link-share')
}

const {fbPrefix, tgPrefix, twPrefix} = {
  fbPrefix: 'https://www.facebook.com/sharer/sharer.php?u=',
  tgPrefix: 'https://t.me/share/url?url=',
  twPrefix: 'https://twitter.com/intent/tweet?url='
}

const {tgShareText, twShareText} = {
  tgShareText: encodeURI(document.querySelector('title').textContent),
  twShareText: encodeURI(document.querySelector('title').textContent)
}

const currentUrl = window.location.href;


setSocialShareUrl(fbPrefix, currentUrl, fbLink);
setSocialShareUrl(tgPrefix, currentUrl, tgLink, tgShareText);
setSocialShareUrl(twPrefix, currentUrl, twLink, twShareText);

if(window.matchMedia('(max-width: 600px)').matches) {
  makeLinkShare(
    [...document.querySelectorAll('.link-share')],
    currentUrl,
    [...document.querySelectorAll('.link-shared-tooltip_device_mobile')]
    )
} else {
  makeLinkShare(
    [...document.querySelectorAll('.link-share')],
    currentUrl,
    [...document.querySelectorAll('.link-shared-tooltip_device_desktop')]
    )
}



function setSocialShareUrl(prefix, location, linksArray, shareText) {
  const encodedLocation = encodeURI(location);
  const urlToAppend = shareText ? `${prefix}${encodedLocation}&text=${shareText}` : `${prefix}${encodedLocation}`;
  linksArray.forEach(element => {
    element.setAttribute('href', urlToAppend)
  });
}

function makeLinkShare(linksArray, url, tooltipArray) {
  linksArray.forEach((link, linkIndex) => {
    link.onclick = () => {
      navigator.clipboard.writeText(url);
      if(tooltipArray.length > 1) {
        tooltipArray[linkIndex].style.opacity = '1';
        tooltipArray[linkIndex].setAttribute('aria-hidden', false);
        setTimeout(()=>{
          tooltipArray[linkIndex].style.opacity = '0';
          tooltipArray[linkIndex].setAttribute('aria-hidden', true);
        }, 3000)
      } else {
        tooltipArray[0].style.opacity = '1';
        tooltipArray[0].setAttribute('aria-hidden', false);
        setTimeout(()=>{
          tooltipArray[0].style.opacity = '0';
          tooltipArray[0].setAttribute('aria-hidden', true);
        }, 3000)
      }
    }
  })
}
