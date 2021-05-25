const StripHtml = (_) => {
  return _.replace(/<\/?[^>]+(>|$)/g, '');
};

export default StripHtml;
