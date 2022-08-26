export type CustomerType = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};

export type InitialInfoType = {
  seed: string;
  results: number;
  page: number;
  version: string;
};

export const initialResultUser = {
  gender: "",
  name: {
    title: "",
    first: "",
    last: "",
  },
  location: {
    street: {
      number: 0,
      name: "",
    },
    city: "",
    state: "",
    country: "",
    postcode: 17072,
    coordinates: {
      latitude: "",
      longitude: "",
    },
    timezone: {
      offset: "",
      description: "",
    },
  },
  email: "",
  login: {
    uuid: "",
    username: "",
    password: "",
    salt: "",
    md5: "",
    sha1: "",
    sha256: "",
  },
  dob: {
    date: "",
    age: 0,
  },
  registered: {
    date: "",
    age: 0,
  },
  phone: "",
  cell: "",
  id: {
    name: "",
    value: "",
  },
  picture: {
    large: "",
    medium: "",
    thumbnail: "",
  },
  nat: "RS",
};

export const initialInfo: InitialInfoType = {
  seed: "",
  results: 0,
  page: 0,
  version: "",
};
