const observer = new MutationObserver((e) => {
  observer.disconnect();
  $('.github-alert').remove();  
});
      .catch((err) => { showAlert(err.message, LEVEL_ERROR) });
  const files = $('.item').toArray().map((e) => {
    const match = e.innerText.match(/(.*?)\.(gs|html)$/);
    if (!match || !match[1] || !match[2]) return;
    return match[1];
  });
    const ids = initData.filter((data) => { return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(data) });
    context.projectId = initData[initData.indexOf(ids[0]) + 1];
    if (context.projectId.length != 33) {
      reject(new Error('cant not get project ID'));
    const promises = ids.map((id) => {
      return new Promise((resolve, reject) => {
        const payload = `7|1|8|https://script.google.com/macros/d/${context.projectId}/gwt/\|${context.gasToken}|_|getFileContent|j|${id}|${context.projectId}|k|1|2|3|4|1|5|5|6|7|8|0|0|`;
        $.ajax({
          url: context.gasUrl,
          headers: context.gasHeaders,
          method: 'POST',
          crossDomain: true,
          data: payload,
          dataType: 'text'
        })
        .then((response) => {
          if (!response.startsWith('//OK'))  reject(new Error('get apps script code failed'));
          //evil eval, but it's simple to get the object since it's not valid json object
          const codeContent = eval(response.slice(4)).filter((e) => {
            return typeof(e) === 'object';
          })[0];
          resolve({file : codeContent[codeContent.length - 6], content: codeContent[codeContent.length - 10], id : id });
        })
        .fail(reject);
    });
    return Promise.all(promises);
  })
  .then((responses) => {
    context.fileIds = responses.reduce((hash, elem) => {
      if (elem) hash[elem.file] = elem.id;
      return hash;
    }, {});
    return responses;
}
function prepareCode(gasFiles) {
  return new Promise((resolve, reject) => {
    .then(resolve)
    .fail(reject);
  })
  .then((response) => {
    return $.getJSON(
      `${baseUrl}/repos/${context.repo.fullName}/git/trees/${response.commit.commit.tree.sha}`,
      { recursive: 1, access_token: accessToken }
    );
  })
  .then((response) => {
    const promises = response.tree.filter((tree) => {
      return tree.type === 'blob' && /(\.gs|\.html)$/.test(tree.path);
    .map((tree) => {
      return new Promise((resolve, reject) => {
        $.getJSON(tree.url, {access_token: accessToken })
        .then((content) => {
          resolve({ file: tree.path, content: decodeURIComponent(escape(atob(content.content)))});
        .fail(reject)
      });
    });
    return Promise.all(promises);
  })
    const files = $('.item').toArray().reduce((hash, e) => {
      const match = e.innerText.match(/(.*?)\.(gs|html)$/);
      if (!match || !match[1] || !match[2]) return hash;
      hash[match[1]] = match[0];
      return hash;
    }, {});
      gas: gasFiles.reduce((hash, elem) => {
        if (elem) hash[files[elem.file]] = elem.content;
      github: data.reduce((hash, elem) => {
  $('.d2h-file-name-wrapper').each((i, e) => {
    const filename = $(e).children('.d2h-file-name').text();
    $(e).prepend(`<span><input type="checkbox" class="diff-file" checked="true" value="${filename}" style="margin-right: 10px;"></span>`);
  });
  const promises = $('.diff-file:checked').toArray().map((elem) => {
    const file = elem.value;
  if (promises.length === 0) {
    showAlert("Nothing to do", LEVEL_WARN);
    return;
  }

  const promises = $('.diff-file:checked').toArray().map((elem) => {
    const file = elem.value;
    const payload = {
      content: code.gas[file],
      encoding: "utf-8"
    };
    return $.ajax({
    })
    .then((response) => {
      return {file: file, blob: response};
    })
  });
  if (promises.length === 0) {
    showAlert("Nothing to do", LEVEL_WARN);
    return;
  }

  Promise.all([
    Promise.all(promises),
    const tree = responses[0].map((data) => {
      return {
        path: data.file,
        sha: data.blob.sha
      }
    });
    const payload = {
      base_tree: responses[1].commit.commit.tree.sha,
      tree: tree
    .then((response) => {
      const id = responseData.filter((data) => { return /^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/.test(data) });
      if (id.length > 0) {
        context.fileIds[file] = id[0];
        resolve();
      } else {
        reject(new Error('can not parse response'));
    observer.disconnect();
    observer.observe(document.getElementById('docs-butterbar-container'), { childList: true });
  })