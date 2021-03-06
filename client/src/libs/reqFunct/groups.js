export const getSchemas = async (phase = 1) => {
  try {
    return (await fetch(`/api/schemas/${phase}`)).json();
  } catch (err) {
    console.log('Req schema err ', err.message);
  }
};

export const getGroupId = async (name, phase, online, students, shedule) => {
  try {
    return (
      await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phase,
          online,
          students,
          shedule,
        }),
      })
    ).json();
  } catch (err) {
    console.log('Req GroupId err ', err.message);
  }
};

export const putGroup = async (name, phase, online, students, shedule, groupId) => {
  try {
    return (
      await fetch(`/api/groups/${groupId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          phase,
          online,
          students,
          shedule
        }),
      })
    ).json();
  } catch (err) {
    console.log('Put group err ', err.message);
  }
};
